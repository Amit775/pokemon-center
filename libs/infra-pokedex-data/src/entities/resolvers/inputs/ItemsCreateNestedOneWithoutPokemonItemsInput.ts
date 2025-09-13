import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemsCreateOrConnectWithoutPokemonItemsInput } from "../inputs/ItemsCreateOrConnectWithoutPokemonItemsInput";
import { ItemsCreateWithoutPokemonItemsInput } from "../inputs/ItemsCreateWithoutPokemonItemsInput";
import { ItemsWhereUniqueInput } from "../inputs/ItemsWhereUniqueInput";

@TypeGraphQL.InputType("ItemsCreateNestedOneWithoutPokemonItemsInput", {})
export class ItemsCreateNestedOneWithoutPokemonItemsInput {
  @TypeGraphQL.Field(_type => ItemsCreateWithoutPokemonItemsInput, {
    nullable: true
  })
  create?: ItemsCreateWithoutPokemonItemsInput | undefined;

  @TypeGraphQL.Field(_type => ItemsCreateOrConnectWithoutPokemonItemsInput, {
    nullable: true
  })
  connectOrCreate?: ItemsCreateOrConnectWithoutPokemonItemsInput | undefined;

  @TypeGraphQL.Field(_type => ItemsWhereUniqueInput, {
    nullable: true
  })
  connect?: ItemsWhereUniqueInput | undefined;
}
