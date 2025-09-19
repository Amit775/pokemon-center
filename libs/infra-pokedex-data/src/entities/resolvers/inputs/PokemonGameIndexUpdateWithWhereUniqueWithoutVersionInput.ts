import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonGameIndexUpdateWithoutVersionInput } from "../inputs/PokemonGameIndexUpdateWithoutVersionInput";
import { PokemonGameIndexWhereUniqueInput } from "../inputs/PokemonGameIndexWhereUniqueInput";

@TypeGraphQL.InputType("PokemonGameIndexUpdateWithWhereUniqueWithoutVersionInput", {})
export class PokemonGameIndexUpdateWithWhereUniqueWithoutVersionInput {
  @TypeGraphQL.Field(_type => PokemonGameIndexWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonGameIndexWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonGameIndexUpdateWithoutVersionInput, {
    nullable: false
  })
  data!: PokemonGameIndexUpdateWithoutVersionInput;
}
