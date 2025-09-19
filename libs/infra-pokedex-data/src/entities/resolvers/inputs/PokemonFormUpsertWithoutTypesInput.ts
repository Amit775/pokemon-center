import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonFormCreateWithoutTypesInput } from "../inputs/PokemonFormCreateWithoutTypesInput";
import { PokemonFormUpdateWithoutTypesInput } from "../inputs/PokemonFormUpdateWithoutTypesInput";
import { PokemonFormWhereInput } from "../inputs/PokemonFormWhereInput";

@TypeGraphQL.InputType("PokemonFormUpsertWithoutTypesInput", {})
export class PokemonFormUpsertWithoutTypesInput {
  @TypeGraphQL.Field(_type => PokemonFormUpdateWithoutTypesInput, {
    nullable: false
  })
  update!: PokemonFormUpdateWithoutTypesInput;

  @TypeGraphQL.Field(_type => PokemonFormCreateWithoutTypesInput, {
    nullable: false
  })
  create!: PokemonFormCreateWithoutTypesInput;

  @TypeGraphQL.Field(_type => PokemonFormWhereInput, {
    nullable: true
  })
  where?: PokemonFormWhereInput | undefined;
}
