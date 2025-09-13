import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovesCreateWithoutGenerationInput } from "../inputs/MovesCreateWithoutGenerationInput";
import { MovesUpdateWithoutGenerationInput } from "../inputs/MovesUpdateWithoutGenerationInput";
import { MovesWhereUniqueInput } from "../inputs/MovesWhereUniqueInput";

@TypeGraphQL.InputType("MovesUpsertWithWhereUniqueWithoutGenerationInput", {})
export class MovesUpsertWithWhereUniqueWithoutGenerationInput {
  @TypeGraphQL.Field(_type => MovesWhereUniqueInput, {
    nullable: false
  })
  where!: MovesWhereUniqueInput;

  @TypeGraphQL.Field(_type => MovesUpdateWithoutGenerationInput, {
    nullable: false
  })
  update!: MovesUpdateWithoutGenerationInput;

  @TypeGraphQL.Field(_type => MovesCreateWithoutGenerationInput, {
    nullable: false
  })
  create!: MovesCreateWithoutGenerationInput;
}
