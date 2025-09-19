import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonMoveCreateManyMoveMethodInputEnvelope } from "../inputs/PokemonMoveCreateManyMoveMethodInputEnvelope";
import { PokemonMoveCreateOrConnectWithoutMoveMethodInput } from "../inputs/PokemonMoveCreateOrConnectWithoutMoveMethodInput";
import { PokemonMoveCreateWithoutMoveMethodInput } from "../inputs/PokemonMoveCreateWithoutMoveMethodInput";
import { PokemonMoveWhereUniqueInput } from "../inputs/PokemonMoveWhereUniqueInput";

@TypeGraphQL.InputType("PokemonMoveCreateNestedManyWithoutMoveMethodInput", {})
export class PokemonMoveCreateNestedManyWithoutMoveMethodInput {
  @TypeGraphQL.Field(_type => [PokemonMoveCreateWithoutMoveMethodInput], {
    nullable: true
  })
  create?: PokemonMoveCreateWithoutMoveMethodInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonMoveCreateOrConnectWithoutMoveMethodInput], {
    nullable: true
  })
  connectOrCreate?: PokemonMoveCreateOrConnectWithoutMoveMethodInput[] | undefined;

  @TypeGraphQL.Field(_type => PokemonMoveCreateManyMoveMethodInputEnvelope, {
    nullable: true
  })
  createMany?: PokemonMoveCreateManyMoveMethodInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PokemonMoveWhereUniqueInput], {
    nullable: true
  })
  connect?: PokemonMoveWhereUniqueInput[] | undefined;
}
