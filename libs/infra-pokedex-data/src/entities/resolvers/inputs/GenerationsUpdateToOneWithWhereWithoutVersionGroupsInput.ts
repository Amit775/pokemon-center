import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GenerationsUpdateWithoutVersionGroupsInput } from "../inputs/GenerationsUpdateWithoutVersionGroupsInput";
import { GenerationsWhereInput } from "../inputs/GenerationsWhereInput";

@TypeGraphQL.InputType("GenerationsUpdateToOneWithWhereWithoutVersionGroupsInput", {})
export class GenerationsUpdateToOneWithWhereWithoutVersionGroupsInput {
  @TypeGraphQL.Field(_type => GenerationsWhereInput, {
    nullable: true
  })
  where?: GenerationsWhereInput | undefined;

  @TypeGraphQL.Field(_type => GenerationsUpdateWithoutVersionGroupsInput, {
    nullable: false
  })
  data!: GenerationsUpdateWithoutVersionGroupsInput;
}
