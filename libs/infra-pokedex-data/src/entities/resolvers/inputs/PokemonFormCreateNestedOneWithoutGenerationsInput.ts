import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonFormCreateOrConnectWithoutGenerationsInput } from "../inputs/PokemonFormCreateOrConnectWithoutGenerationsInput";
import { PokemonFormCreateWithoutGenerationsInput } from "../inputs/PokemonFormCreateWithoutGenerationsInput";
import { PokemonFormWhereUniqueInput } from "../inputs/PokemonFormWhereUniqueInput";

@TypeGraphQL.InputType("PokemonFormCreateNestedOneWithoutGenerationsInput", {})
export class PokemonFormCreateNestedOneWithoutGenerationsInput {
  @TypeGraphQL.Field(_type => PokemonFormCreateWithoutGenerationsInput, {
    nullable: true
  })
  create?: PokemonFormCreateWithoutGenerationsInput | undefined;

  @TypeGraphQL.Field(_type => PokemonFormCreateOrConnectWithoutGenerationsInput, {
    nullable: true
  })
  connectOrCreate?: PokemonFormCreateOrConnectWithoutGenerationsInput | undefined;

  @TypeGraphQL.Field(_type => PokemonFormWhereUniqueInput, {
    nullable: true
  })
  connect?: PokemonFormWhereUniqueInput | undefined;
}
