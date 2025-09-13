import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VersionsScalarWhereInput } from "../inputs/VersionsScalarWhereInput";
import { VersionsUpdateManyMutationInput } from "../inputs/VersionsUpdateManyMutationInput";

@TypeGraphQL.InputType("VersionsUpdateManyWithWhereWithoutVersionGroupInput", {})
export class VersionsUpdateManyWithWhereWithoutVersionGroupInput {
  @TypeGraphQL.Field(_type => VersionsScalarWhereInput, {
    nullable: false
  })
  where!: VersionsScalarWhereInput;

  @TypeGraphQL.Field(_type => VersionsUpdateManyMutationInput, {
    nullable: false
  })
  data!: VersionsUpdateManyMutationInput;
}
