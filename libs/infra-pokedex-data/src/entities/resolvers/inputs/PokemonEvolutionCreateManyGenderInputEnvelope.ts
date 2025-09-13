import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonEvolutionCreateManyGenderInput } from "../inputs/PokemonEvolutionCreateManyGenderInput";

@TypeGraphQL.InputType("PokemonEvolutionCreateManyGenderInputEnvelope", {})
export class PokemonEvolutionCreateManyGenderInputEnvelope {
  @TypeGraphQL.Field(_type => [PokemonEvolutionCreateManyGenderInput], {
    nullable: false
  })
  data!: PokemonEvolutionCreateManyGenderInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
