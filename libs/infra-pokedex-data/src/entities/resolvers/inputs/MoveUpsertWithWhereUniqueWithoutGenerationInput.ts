import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveCreateWithoutGenerationInput } from "../inputs/MoveCreateWithoutGenerationInput";
import { MoveUpdateWithoutGenerationInput } from "../inputs/MoveUpdateWithoutGenerationInput";
import { MoveWhereUniqueInput } from "../inputs/MoveWhereUniqueInput";

@TypeGraphQL.InputType("MoveUpsertWithWhereUniqueWithoutGenerationInput", {})
export class MoveUpsertWithWhereUniqueWithoutGenerationInput {
  @TypeGraphQL.Field(_type => MoveWhereUniqueInput, {
    nullable: false
  })
  where!: MoveWhereUniqueInput;

  @TypeGraphQL.Field(_type => MoveUpdateWithoutGenerationInput, {
    nullable: false
  })
  update!: MoveUpdateWithoutGenerationInput;

  @TypeGraphQL.Field(_type => MoveCreateWithoutGenerationInput, {
    nullable: false
  })
  create!: MoveCreateWithoutGenerationInput;
}
