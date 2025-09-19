import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GenderCreateOrConnectWithoutEvolutionInput } from "../inputs/GenderCreateOrConnectWithoutEvolutionInput";
import { GenderCreateWithoutEvolutionInput } from "../inputs/GenderCreateWithoutEvolutionInput";
import { GenderWhereUniqueInput } from "../inputs/GenderWhereUniqueInput";

@TypeGraphQL.InputType("GenderCreateNestedOneWithoutEvolutionInput", {})
export class GenderCreateNestedOneWithoutEvolutionInput {
  @TypeGraphQL.Field(_type => GenderCreateWithoutEvolutionInput, {
    nullable: true
  })
  create?: GenderCreateWithoutEvolutionInput | undefined;

  @TypeGraphQL.Field(_type => GenderCreateOrConnectWithoutEvolutionInput, {
    nullable: true
  })
  connectOrCreate?: GenderCreateOrConnectWithoutEvolutionInput | undefined;

  @TypeGraphQL.Field(_type => GenderWhereUniqueInput, {
    nullable: true
  })
  connect?: GenderWhereUniqueInput | undefined;
}
