import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonFormCreateWithoutGenerationsInput } from "../inputs/PokemonFormCreateWithoutGenerationsInput";
import { PokemonFormUpdateWithoutGenerationsInput } from "../inputs/PokemonFormUpdateWithoutGenerationsInput";
import { PokemonFormWhereInput } from "../inputs/PokemonFormWhereInput";

@TypeGraphQL.InputType("PokemonFormUpsertWithoutGenerationsInput", {})
export class PokemonFormUpsertWithoutGenerationsInput {
  @TypeGraphQL.Field(_type => PokemonFormUpdateWithoutGenerationsInput, {
    nullable: false
  })
  update!: PokemonFormUpdateWithoutGenerationsInput;

  @TypeGraphQL.Field(_type => PokemonFormCreateWithoutGenerationsInput, {
    nullable: false
  })
  create!: PokemonFormCreateWithoutGenerationsInput;

  @TypeGraphQL.Field(_type => PokemonFormWhereInput, {
    nullable: true
  })
  where?: PokemonFormWhereInput | undefined;
}
