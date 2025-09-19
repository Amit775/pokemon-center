import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VersionScalarWhereInput } from "../inputs/VersionScalarWhereInput";
import { VersionUpdateManyMutationInput } from "../inputs/VersionUpdateManyMutationInput";

@TypeGraphQL.InputType("VersionUpdateManyWithWhereWithoutVersionGroupInput", {})
export class VersionUpdateManyWithWhereWithoutVersionGroupInput {
  @TypeGraphQL.Field(_type => VersionScalarWhereInput, {
    nullable: false
  })
  where!: VersionScalarWhereInput;

  @TypeGraphQL.Field(_type => VersionUpdateManyMutationInput, {
    nullable: false
  })
  data!: VersionUpdateManyMutationInput;
}
