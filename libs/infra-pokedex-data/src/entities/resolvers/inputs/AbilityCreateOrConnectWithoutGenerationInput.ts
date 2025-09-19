import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AbilityCreateWithoutGenerationInput } from "../inputs/AbilityCreateWithoutGenerationInput";
import { AbilityWhereUniqueInput } from "../inputs/AbilityWhereUniqueInput";

@TypeGraphQL.InputType("AbilityCreateOrConnectWithoutGenerationInput", {})
export class AbilityCreateOrConnectWithoutGenerationInput {
  @TypeGraphQL.Field(_type => AbilityWhereUniqueInput, {
    nullable: false
  })
  where!: AbilityWhereUniqueInput;

  @TypeGraphQL.Field(_type => AbilityCreateWithoutGenerationInput, {
    nullable: false
  })
  create!: AbilityCreateWithoutGenerationInput;
}
