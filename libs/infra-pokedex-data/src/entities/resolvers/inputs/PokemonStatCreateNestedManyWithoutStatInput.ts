import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonStatCreateManyStatInputEnvelope } from "../inputs/PokemonStatCreateManyStatInputEnvelope";
import { PokemonStatCreateOrConnectWithoutStatInput } from "../inputs/PokemonStatCreateOrConnectWithoutStatInput";
import { PokemonStatCreateWithoutStatInput } from "../inputs/PokemonStatCreateWithoutStatInput";
import { PokemonStatWhereUniqueInput } from "../inputs/PokemonStatWhereUniqueInput";

@TypeGraphQL.InputType("PokemonStatCreateNestedManyWithoutStatInput", {})
export class PokemonStatCreateNestedManyWithoutStatInput {
  @TypeGraphQL.Field(_type => [PokemonStatCreateWithoutStatInput], {
    nullable: true
  })
  create?: PokemonStatCreateWithoutStatInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonStatCreateOrConnectWithoutStatInput], {
    nullable: true
  })
  connectOrCreate?: PokemonStatCreateOrConnectWithoutStatInput[] | undefined;

  @TypeGraphQL.Field(_type => PokemonStatCreateManyStatInputEnvelope, {
    nullable: true
  })
  createMany?: PokemonStatCreateManyStatInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PokemonStatWhereUniqueInput], {
    nullable: true
  })
  connect?: PokemonStatWhereUniqueInput[] | undefined;
}
