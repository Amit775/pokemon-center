import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonTypesCreateWithoutTypeInput } from "../inputs/PokemonTypesCreateWithoutTypeInput";
import { PokemonTypesUpdateWithoutTypeInput } from "../inputs/PokemonTypesUpdateWithoutTypeInput";
import { PokemonTypesWhereUniqueInput } from "../inputs/PokemonTypesWhereUniqueInput";

@TypeGraphQL.InputType("PokemonTypesUpsertWithWhereUniqueWithoutTypeInput", {})
export class PokemonTypesUpsertWithWhereUniqueWithoutTypeInput {
  @TypeGraphQL.Field(_type => PokemonTypesWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonTypesWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonTypesUpdateWithoutTypeInput, {
    nullable: false
  })
  update!: PokemonTypesUpdateWithoutTypeInput;

  @TypeGraphQL.Field(_type => PokemonTypesCreateWithoutTypeInput, {
    nullable: false
  })
  create!: PokemonTypesCreateWithoutTypeInput;
}
