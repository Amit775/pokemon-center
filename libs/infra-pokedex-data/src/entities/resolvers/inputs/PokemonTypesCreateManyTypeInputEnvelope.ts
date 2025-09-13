import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonTypesCreateManyTypeInput } from "../inputs/PokemonTypesCreateManyTypeInput";

@TypeGraphQL.InputType("PokemonTypesCreateManyTypeInputEnvelope", {})
export class PokemonTypesCreateManyTypeInputEnvelope {
  @TypeGraphQL.Field(_type => [PokemonTypesCreateManyTypeInput], {
    nullable: false
  })
  data!: PokemonTypesCreateManyTypeInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
