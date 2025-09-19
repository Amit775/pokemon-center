import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonItemCreateManyItemInputEnvelope } from "../inputs/PokemonItemCreateManyItemInputEnvelope";
import { PokemonItemCreateOrConnectWithoutItemInput } from "../inputs/PokemonItemCreateOrConnectWithoutItemInput";
import { PokemonItemCreateWithoutItemInput } from "../inputs/PokemonItemCreateWithoutItemInput";
import { PokemonItemWhereUniqueInput } from "../inputs/PokemonItemWhereUniqueInput";

@TypeGraphQL.InputType("PokemonItemCreateNestedManyWithoutItemInput", {})
export class PokemonItemCreateNestedManyWithoutItemInput {
  @TypeGraphQL.Field(_type => [PokemonItemCreateWithoutItemInput], {
    nullable: true
  })
  create?: PokemonItemCreateWithoutItemInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonItemCreateOrConnectWithoutItemInput], {
    nullable: true
  })
  connectOrCreate?: PokemonItemCreateOrConnectWithoutItemInput[] | undefined;

  @TypeGraphQL.Field(_type => PokemonItemCreateManyItemInputEnvelope, {
    nullable: true
  })
  createMany?: PokemonItemCreateManyItemInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PokemonItemWhereUniqueInput], {
    nullable: true
  })
  connect?: PokemonItemWhereUniqueInput[] | undefined;
}
