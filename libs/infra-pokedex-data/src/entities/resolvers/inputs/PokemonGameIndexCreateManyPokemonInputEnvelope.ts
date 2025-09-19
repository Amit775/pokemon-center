import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonGameIndexCreateManyPokemonInput } from "../inputs/PokemonGameIndexCreateManyPokemonInput";

@TypeGraphQL.InputType("PokemonGameIndexCreateManyPokemonInputEnvelope", {})
export class PokemonGameIndexCreateManyPokemonInputEnvelope {
  @TypeGraphQL.Field(_type => [PokemonGameIndexCreateManyPokemonInput], {
    nullable: false
  })
  data!: PokemonGameIndexCreateManyPokemonInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
