import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonFormTypeCreateManyTypeInputEnvelope } from "../inputs/PokemonFormTypeCreateManyTypeInputEnvelope";
import { PokemonFormTypeCreateOrConnectWithoutTypeInput } from "../inputs/PokemonFormTypeCreateOrConnectWithoutTypeInput";
import { PokemonFormTypeCreateWithoutTypeInput } from "../inputs/PokemonFormTypeCreateWithoutTypeInput";
import { PokemonFormTypeWhereUniqueInput } from "../inputs/PokemonFormTypeWhereUniqueInput";

@TypeGraphQL.InputType("PokemonFormTypeCreateNestedManyWithoutTypeInput", {})
export class PokemonFormTypeCreateNestedManyWithoutTypeInput {
  @TypeGraphQL.Field(_type => [PokemonFormTypeCreateWithoutTypeInput], {
    nullable: true
  })
  create?: PokemonFormTypeCreateWithoutTypeInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonFormTypeCreateOrConnectWithoutTypeInput], {
    nullable: true
  })
  connectOrCreate?: PokemonFormTypeCreateOrConnectWithoutTypeInput[] | undefined;

  @TypeGraphQL.Field(_type => PokemonFormTypeCreateManyTypeInputEnvelope, {
    nullable: true
  })
  createMany?: PokemonFormTypeCreateManyTypeInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PokemonFormTypeWhereUniqueInput], {
    nullable: true
  })
  connect?: PokemonFormTypeWhereUniqueInput[] | undefined;
}
