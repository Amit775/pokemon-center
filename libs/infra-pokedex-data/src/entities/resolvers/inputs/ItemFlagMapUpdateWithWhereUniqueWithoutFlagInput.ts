import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemFlagMapUpdateWithoutFlagInput } from "../inputs/ItemFlagMapUpdateWithoutFlagInput";
import { ItemFlagMapWhereUniqueInput } from "../inputs/ItemFlagMapWhereUniqueInput";

@TypeGraphQL.InputType("ItemFlagMapUpdateWithWhereUniqueWithoutFlagInput", {})
export class ItemFlagMapUpdateWithWhereUniqueWithoutFlagInput {
  @TypeGraphQL.Field(_type => ItemFlagMapWhereUniqueInput, {
    nullable: false
  })
  where!: ItemFlagMapWhereUniqueInput;

  @TypeGraphQL.Field(_type => ItemFlagMapUpdateWithoutFlagInput, {
    nullable: false
  })
  data!: ItemFlagMapUpdateWithoutFlagInput;
}
