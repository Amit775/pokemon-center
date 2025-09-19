import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonItemCreateWithoutItemInput } from "../inputs/PokemonItemCreateWithoutItemInput";
import { PokemonItemUpdateWithoutItemInput } from "../inputs/PokemonItemUpdateWithoutItemInput";
import { PokemonItemWhereUniqueInput } from "../inputs/PokemonItemWhereUniqueInput";

@TypeGraphQL.InputType("PokemonItemUpsertWithWhereUniqueWithoutItemInput", {})
export class PokemonItemUpsertWithWhereUniqueWithoutItemInput {
  @TypeGraphQL.Field(_type => PokemonItemWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonItemWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonItemUpdateWithoutItemInput, {
    nullable: false
  })
  update!: PokemonItemUpdateWithoutItemInput;

  @TypeGraphQL.Field(_type => PokemonItemCreateWithoutItemInput, {
    nullable: false
  })
  create!: PokemonItemCreateWithoutItemInput;
}
