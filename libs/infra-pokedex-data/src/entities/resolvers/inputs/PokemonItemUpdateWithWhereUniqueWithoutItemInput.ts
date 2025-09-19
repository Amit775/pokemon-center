import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonItemUpdateWithoutItemInput } from "../inputs/PokemonItemUpdateWithoutItemInput";
import { PokemonItemWhereUniqueInput } from "../inputs/PokemonItemWhereUniqueInput";

@TypeGraphQL.InputType("PokemonItemUpdateWithWhereUniqueWithoutItemInput", {})
export class PokemonItemUpdateWithWhereUniqueWithoutItemInput {
  @TypeGraphQL.Field(_type => PokemonItemWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonItemWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonItemUpdateWithoutItemInput, {
    nullable: false
  })
  data!: PokemonItemUpdateWithoutItemInput;
}
