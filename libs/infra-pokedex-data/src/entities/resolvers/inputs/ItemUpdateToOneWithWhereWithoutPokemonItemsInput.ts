import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemUpdateWithoutPokemonItemsInput } from "../inputs/ItemUpdateWithoutPokemonItemsInput";
import { ItemWhereInput } from "../inputs/ItemWhereInput";

@TypeGraphQL.InputType("ItemUpdateToOneWithWhereWithoutPokemonItemsInput", {})
export class ItemUpdateToOneWithWhereWithoutPokemonItemsInput {
  @TypeGraphQL.Field(_type => ItemWhereInput, {
    nullable: true
  })
  where?: ItemWhereInput | undefined;

  @TypeGraphQL.Field(_type => ItemUpdateWithoutPokemonItemsInput, {
    nullable: false
  })
  data!: ItemUpdateWithoutPokemonItemsInput;
}
