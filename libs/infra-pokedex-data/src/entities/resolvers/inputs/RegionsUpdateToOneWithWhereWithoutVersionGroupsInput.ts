import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RegionsUpdateWithoutVersionGroupsInput } from "../inputs/RegionsUpdateWithoutVersionGroupsInput";
import { RegionsWhereInput } from "../inputs/RegionsWhereInput";

@TypeGraphQL.InputType("RegionsUpdateToOneWithWhereWithoutVersionGroupsInput", {})
export class RegionsUpdateToOneWithWhereWithoutVersionGroupsInput {
  @TypeGraphQL.Field(_type => RegionsWhereInput, {
    nullable: true
  })
  where?: RegionsWhereInput | undefined;

  @TypeGraphQL.Field(_type => RegionsUpdateWithoutVersionGroupsInput, {
    nullable: false
  })
  data!: RegionsUpdateWithoutVersionGroupsInput;
}
