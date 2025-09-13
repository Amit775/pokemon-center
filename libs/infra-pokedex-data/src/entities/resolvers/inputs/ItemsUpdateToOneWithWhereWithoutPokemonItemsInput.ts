import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemsUpdateWithoutPokemonItemsInput } from "../inputs/ItemsUpdateWithoutPokemonItemsInput";
import { ItemsWhereInput } from "../inputs/ItemsWhereInput";

@TypeGraphQL.InputType("ItemsUpdateToOneWithWhereWithoutPokemonItemsInput", {})
export class ItemsUpdateToOneWithWhereWithoutPokemonItemsInput {
  @TypeGraphQL.Field(_type => ItemsWhereInput, {
    nullable: true
  })
  where?: ItemsWhereInput | undefined;

  @TypeGraphQL.Field(_type => ItemsUpdateWithoutPokemonItemsInput, {
    nullable: false
  })
  data!: ItemsUpdateWithoutPokemonItemsInput;
}
