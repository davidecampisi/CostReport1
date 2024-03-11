/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { Sapbetac4UjobschedulerScheduleResponse } from './sapbetac-4-ujobscheduler-schedule-response';
/**
 * Representation of the 'JobSchedulerServiceJob' schema.
 */
export type JobSchedulerServiceJob =
  | {
      /**
       * ID of the job to be updated.
       * Format: "int32".
       */
      jobId?: number;
      _id?: number;
      /**
       * Name of the job. Name must not contain special characters or only numbers. The job creation request fails if a job with the same name already exists for the technical user.
       */
      name?: string;
      /**
       * Provides more details about a job.
       */
      description?: string;
      /**
       * The fully qualified URL endpoint to be called when the job runs.
       */
      action?: string;
      /**
       * Activation status of the job (default value is false).
       */
      active?: boolean;
      /**
       * The HTTP method to be used to call the job action endpoint URL. Allowed values are `GET`, `POST`, `PUT`, and `DELETE`.
       */
      httpMethod?: string;
      /**
       * The type of job that is being run.
       */
      jobType?: string;
      /**
       * Tenant ID upon which the job lists are filtered. This parameter applies only if the API is invoked using an access token obtained on behalf of a PaaS tenant from XSUAA.
       */
      tenantId?: string;
      /**
       * The name of the tenant subdomain.
       */
      subDomain?: string;
      /**
       * The date and time at which the job was created.
       */
      createdAt?: string;
      /**
       * The number of active jobs. This parameter is read-only.
       * Format: "int32".
       */
      ACTIVECOUNT?: number;
      /**
       * The number of inactive jobs. This parameter is read-only.
       * Format: "int32".
       */
      INACTIVECOUNT?: number;
      /**
       * Contains one or more job schedules to be created.
       */
      schedules?: Sapbetac4UjobschedulerScheduleResponse[];
    }
  | Record<string, any>;
