import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovesUpdateWithoutGenerationInput } from "../inputs/MovesUpdateWithoutGenerationInput";
import { MovesWhereUniqueInput } from "../inputs/MovesWhereUniqueInput";

@TypeGraphQL.InputType("MovesUpdateWithWhereUniqueWithoutGenerationInput", {})
export class MovesUpdateWithWhereUniqueWithoutGenerationInput {
  @TypeGraphQL.Field(_type => MovesWhereUniqueInput, {
    nullable: false
  })
  where!: MovesWhereUniqueInput;

  @TypeGraphQL.Field(_type => MovesUpdateWithoutGenerationInput, {
    nullable: false
  })
  data!: MovesUpdateWithoutGenerationInput;
}
