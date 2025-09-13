import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonItemsUpdateWithoutItemInput } from "../inputs/PokemonItemsUpdateWithoutItemInput";
import { PokemonItemsWhereUniqueInput } from "../inputs/PokemonItemsWhereUniqueInput";

@TypeGraphQL.InputType("PokemonItemsUpdateWithWhereUniqueWithoutItemInput", {})
export class PokemonItemsUpdateWithWhereUniqueWithoutItemInput {
  @TypeGraphQL.Field(_type => PokemonItemsWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonItemsWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonItemsUpdateWithoutItemInput, {
    nullable: false
  })
  data!: PokemonItemsUpdateWithoutItemInput;
}
