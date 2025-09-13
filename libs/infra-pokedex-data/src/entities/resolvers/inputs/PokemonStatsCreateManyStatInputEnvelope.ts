import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonStatsCreateManyStatInput } from "../inputs/PokemonStatsCreateManyStatInput";

@TypeGraphQL.InputType("PokemonStatsCreateManyStatInputEnvelope", {})
export class PokemonStatsCreateManyStatInputEnvelope {
  @TypeGraphQL.Field(_type => [PokemonStatsCreateManyStatInput], {
    nullable: false
  })
  data!: PokemonStatsCreateManyStatInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
