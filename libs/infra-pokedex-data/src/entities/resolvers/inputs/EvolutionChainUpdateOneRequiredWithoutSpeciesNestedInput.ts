import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EvolutionChainCreateOrConnectWithoutSpeciesInput } from "../inputs/EvolutionChainCreateOrConnectWithoutSpeciesInput";
import { EvolutionChainCreateWithoutSpeciesInput } from "../inputs/EvolutionChainCreateWithoutSpeciesInput";
import { EvolutionChainUpdateToOneWithWhereWithoutSpeciesInput } from "../inputs/EvolutionChainUpdateToOneWithWhereWithoutSpeciesInput";
import { EvolutionChainUpsertWithoutSpeciesInput } from "../inputs/EvolutionChainUpsertWithoutSpeciesInput";
import { EvolutionChainWhereUniqueInput } from "../inputs/EvolutionChainWhereUniqueInput";

@TypeGraphQL.InputType("EvolutionChainUpdateOneRequiredWithoutSpeciesNestedInput", {})
export class EvolutionChainUpdateOneRequiredWithoutSpeciesNestedInput {
  @TypeGraphQL.Field(_type => EvolutionChainCreateWithoutSpeciesInput, {
    nullable: true
  })
  create?: EvolutionChainCreateWithoutSpeciesInput | undefined;

  @TypeGraphQL.Field(_type => EvolutionChainCreateOrConnectWithoutSpeciesInput, {
    nullable: true
  })
  connectOrCreate?: EvolutionChainCreateOrConnectWithoutSpeciesInput | undefined;

  @TypeGraphQL.Field(_type => EvolutionChainUpsertWithoutSpeciesInput, {
    nullable: true
  })
  upsert?: EvolutionChainUpsertWithoutSpeciesInput | undefined;

  @TypeGraphQL.Field(_type => EvolutionChainWhereUniqueInput, {
    nullable: true
  })
  connect?: EvolutionChainWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => EvolutionChainUpdateToOneWithWhereWithoutSpeciesInput, {
    nullable: true
  })
  update?: EvolutionChainUpdateToOneWithWhereWithoutSpeciesInput | undefined;
}
