import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokedexesCreateWithoutDexNumbersInput } from "../inputs/PokedexesCreateWithoutDexNumbersInput";
import { PokedexesWhereUniqueInput } from "../inputs/PokedexesWhereUniqueInput";

@TypeGraphQL.InputType("PokedexesCreateOrConnectWithoutDexNumbersInput", {})
export class PokedexesCreateOrConnectWithoutDexNumbersInput {
  @TypeGraphQL.Field(_type => PokedexesWhereUniqueInput, {
    nullable: false
  })
  where!: PokedexesWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokedexesCreateWithoutDexNumbersInput, {
    nullable: false
  })
  create!: PokedexesCreateWithoutDexNumbersInput;
}
