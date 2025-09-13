import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EvolutionTriggersCreateWithoutEvolutionInput } from "../inputs/EvolutionTriggersCreateWithoutEvolutionInput";
import { EvolutionTriggersUpdateWithoutEvolutionInput } from "../inputs/EvolutionTriggersUpdateWithoutEvolutionInput";
import { EvolutionTriggersWhereInput } from "../inputs/EvolutionTriggersWhereInput";

@TypeGraphQL.InputType("EvolutionTriggersUpsertWithoutEvolutionInput", {})
export class EvolutionTriggersUpsertWithoutEvolutionInput {
  @TypeGraphQL.Field(_type => EvolutionTriggersUpdateWithoutEvolutionInput, {
    nullable: false
  })
  update!: EvolutionTriggersUpdateWithoutEvolutionInput;

  @TypeGraphQL.Field(_type => EvolutionTriggersCreateWithoutEvolutionInput, {
    nullable: false
  })
  create!: EvolutionTriggersCreateWithoutEvolutionInput;

  @TypeGraphQL.Field(_type => EvolutionTriggersWhereInput, {
    nullable: true
  })
  where?: EvolutionTriggersWhereInput | undefined;
}
