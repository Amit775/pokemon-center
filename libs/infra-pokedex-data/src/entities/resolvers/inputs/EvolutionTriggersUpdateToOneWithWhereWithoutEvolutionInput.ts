import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EvolutionTriggersUpdateWithoutEvolutionInput } from "../inputs/EvolutionTriggersUpdateWithoutEvolutionInput";
import { EvolutionTriggersWhereInput } from "../inputs/EvolutionTriggersWhereInput";

@TypeGraphQL.InputType("EvolutionTriggersUpdateToOneWithWhereWithoutEvolutionInput", {})
export class EvolutionTriggersUpdateToOneWithWhereWithoutEvolutionInput {
  @TypeGraphQL.Field(_type => EvolutionTriggersWhereInput, {
    nullable: true
  })
  where?: EvolutionTriggersWhereInput | undefined;

  @TypeGraphQL.Field(_type => EvolutionTriggersUpdateWithoutEvolutionInput, {
    nullable: false
  })
  data!: EvolutionTriggersUpdateWithoutEvolutionInput;
}
