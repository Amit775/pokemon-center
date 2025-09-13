import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovesCreateWithoutContestCombosInput } from "../inputs/MovesCreateWithoutContestCombosInput";
import { MovesUpdateWithoutContestCombosInput } from "../inputs/MovesUpdateWithoutContestCombosInput";
import { MovesWhereInput } from "../inputs/MovesWhereInput";

@TypeGraphQL.InputType("MovesUpsertWithoutContestCombosInput", {})
export class MovesUpsertWithoutContestCombosInput {
  @TypeGraphQL.Field(_type => MovesUpdateWithoutContestCombosInput, {
    nullable: false
  })
  update!: MovesUpdateWithoutContestCombosInput;

  @TypeGraphQL.Field(_type => MovesCreateWithoutContestCombosInput, {
    nullable: false
  })
  create!: MovesCreateWithoutContestCombosInput;

  @TypeGraphQL.Field(_type => MovesWhereInput, {
    nullable: true
  })
  where?: MovesWhereInput | undefined;
}
