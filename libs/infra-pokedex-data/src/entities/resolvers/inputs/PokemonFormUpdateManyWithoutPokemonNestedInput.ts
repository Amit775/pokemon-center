import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonFormCreateManyPokemonInputEnvelope } from "../inputs/PokemonFormCreateManyPokemonInputEnvelope";
import { PokemonFormCreateOrConnectWithoutPokemonInput } from "../inputs/PokemonFormCreateOrConnectWithoutPokemonInput";
import { PokemonFormCreateWithoutPokemonInput } from "../inputs/PokemonFormCreateWithoutPokemonInput";
import { PokemonFormScalarWhereInput } from "../inputs/PokemonFormScalarWhereInput";
import { PokemonFormUpdateManyWithWhereWithoutPokemonInput } from "../inputs/PokemonFormUpdateManyWithWhereWithoutPokemonInput";
import { PokemonFormUpdateWithWhereUniqueWithoutPokemonInput } from "../inputs/PokemonFormUpdateWithWhereUniqueWithoutPokemonInput";
import { PokemonFormUpsertWithWhereUniqueWithoutPokemonInput } from "../inputs/PokemonFormUpsertWithWhereUniqueWithoutPokemonInput";
import { PokemonFormWhereUniqueInput } from "../inputs/PokemonFormWhereUniqueInput";

@TypeGraphQL.InputType("PokemonFormUpdateManyWithoutPokemonNestedInput", {})
export class PokemonFormUpdateManyWithoutPokemonNestedInput {
  @TypeGraphQL.Field(_type => [PokemonFormCreateWithoutPokemonInput], {
    nullable: true
  })
  create?: PokemonFormCreateWithoutPokemonInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonFormCreateOrConnectWithoutPokemonInput], {
    nullable: true
  })
  connectOrCreate?: PokemonFormCreateOrConnectWithoutPokemonInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonFormUpsertWithWhereUniqueWithoutPokemonInput], {
    nullable: true
  })
  upsert?: PokemonFormUpsertWithWhereUniqueWithoutPokemonInput[] | undefined;

  @TypeGraphQL.Field(_type => PokemonFormCreateManyPokemonInputEnvelope, {
    nullable: true
  })
  createMany?: PokemonFormCreateManyPokemonInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PokemonFormWhereUniqueInput], {
    nullable: true
  })
  set?: PokemonFormWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonFormWhereUniqueInput], {
    nullable: true
  })
  disconnect?: PokemonFormWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonFormWhereUniqueInput], {
    nullable: true
  })
  delete?: PokemonFormWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonFormWhereUniqueInput], {
    nullable: true
  })
  connect?: PokemonFormWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonFormUpdateWithWhereUniqueWithoutPokemonInput], {
    nullable: true
  })
  update?: PokemonFormUpdateWithWhereUniqueWithoutPokemonInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonFormUpdateManyWithWhereWithoutPokemonInput], {
    nullable: true
  })
  updateMany?: PokemonFormUpdateManyWithWhereWithoutPokemonInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonFormScalarWhereInput], {
    nullable: true
  })
  deleteMany?: PokemonFormScalarWhereInput[] | undefined;
}
