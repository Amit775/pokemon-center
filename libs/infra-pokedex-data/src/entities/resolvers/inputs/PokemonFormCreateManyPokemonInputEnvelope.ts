import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonFormCreateManyPokemonInput } from "../inputs/PokemonFormCreateManyPokemonInput";

@TypeGraphQL.InputType("PokemonFormCreateManyPokemonInputEnvelope", {})
export class PokemonFormCreateManyPokemonInputEnvelope {
  @TypeGraphQL.Field(_type => [PokemonFormCreateManyPokemonInput], {
    nullable: false
  })
  data!: PokemonFormCreateManyPokemonInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
