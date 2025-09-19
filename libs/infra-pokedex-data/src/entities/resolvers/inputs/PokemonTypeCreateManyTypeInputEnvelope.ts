import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonTypeCreateManyTypeInput } from "../inputs/PokemonTypeCreateManyTypeInput";

@TypeGraphQL.InputType("PokemonTypeCreateManyTypeInputEnvelope", {})
export class PokemonTypeCreateManyTypeInputEnvelope {
  @TypeGraphQL.Field(_type => [PokemonTypeCreateManyTypeInput], {
    nullable: false
  })
  data!: PokemonTypeCreateManyTypeInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
