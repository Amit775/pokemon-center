import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemGameIndexUpdateWithoutItemInput } from "../inputs/ItemGameIndexUpdateWithoutItemInput";
import { ItemGameIndexWhereUniqueInput } from "../inputs/ItemGameIndexWhereUniqueInput";

@TypeGraphQL.InputType("ItemGameIndexUpdateWithWhereUniqueWithoutItemInput", {})
export class ItemGameIndexUpdateWithWhereUniqueWithoutItemInput {
  @TypeGraphQL.Field(_type => ItemGameIndexWhereUniqueInput, {
    nullable: false
  })
  where!: ItemGameIndexWhereUniqueInput;

  @TypeGraphQL.Field(_type => ItemGameIndexUpdateWithoutItemInput, {
    nullable: false
  })
  data!: ItemGameIndexUpdateWithoutItemInput;
}
