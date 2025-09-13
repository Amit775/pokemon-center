import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RegionsCreateWithoutVersionGroupsInput } from "../inputs/RegionsCreateWithoutVersionGroupsInput";
import { RegionsUpdateWithoutVersionGroupsInput } from "../inputs/RegionsUpdateWithoutVersionGroupsInput";
import { RegionsWhereInput } from "../inputs/RegionsWhereInput";

@TypeGraphQL.InputType("RegionsUpsertWithoutVersionGroupsInput", {})
export class RegionsUpsertWithoutVersionGroupsInput {
  @TypeGraphQL.Field(_type => RegionsUpdateWithoutVersionGroupsInput, {
    nullable: false
  })
  update!: RegionsUpdateWithoutVersionGroupsInput;

  @TypeGraphQL.Field(_type => RegionsCreateWithoutVersionGroupsInput, {
    nullable: false
  })
  create!: RegionsCreateWithoutVersionGroupsInput;

  @TypeGraphQL.Field(_type => RegionsWhereInput, {
    nullable: true
  })
  where?: RegionsWhereInput | undefined;
}
