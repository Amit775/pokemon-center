import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonFormTypesCreateManyTypeInput } from "../inputs/PokemonFormTypesCreateManyTypeInput";

@TypeGraphQL.InputType("PokemonFormTypesCreateManyTypeInputEnvelope", {})
export class PokemonFormTypesCreateManyTypeInputEnvelope {
  @TypeGraphQL.Field(_type => [PokemonFormTypesCreateManyTypeInput], {
    nullable: false
  })
  data!: PokemonFormTypesCreateManyTypeInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
