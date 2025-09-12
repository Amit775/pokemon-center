import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonItemsCreateManyPokemonInput } from "../inputs/PokemonItemsCreateManyPokemonInput";

@TypeGraphQL.InputType("PokemonItemsCreateManyPokemonInputEnvelope", {})
export class PokemonItemsCreateManyPokemonInputEnvelope {
  @TypeGraphQL.Field(_type => [PokemonItemsCreateManyPokemonInput], {
    nullable: false
  })
  data!: PokemonItemsCreateManyPokemonInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
