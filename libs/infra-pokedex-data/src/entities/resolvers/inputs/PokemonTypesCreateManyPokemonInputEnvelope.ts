import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonTypesCreateManyPokemonInput } from "../inputs/PokemonTypesCreateManyPokemonInput";

@TypeGraphQL.InputType("PokemonTypesCreateManyPokemonInputEnvelope", {})
export class PokemonTypesCreateManyPokemonInputEnvelope {
  @TypeGraphQL.Field(_type => [PokemonTypesCreateManyPokemonInput], {
    nullable: false
  })
  data!: PokemonTypesCreateManyPokemonInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
