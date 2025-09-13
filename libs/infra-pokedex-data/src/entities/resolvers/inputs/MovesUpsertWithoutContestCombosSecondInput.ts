import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovesCreateWithoutContestCombosSecondInput } from "../inputs/MovesCreateWithoutContestCombosSecondInput";
import { MovesUpdateWithoutContestCombosSecondInput } from "../inputs/MovesUpdateWithoutContestCombosSecondInput";
import { MovesWhereInput } from "../inputs/MovesWhereInput";

@TypeGraphQL.InputType("MovesUpsertWithoutContestCombosSecondInput", {})
export class MovesUpsertWithoutContestCombosSecondInput {
  @TypeGraphQL.Field(_type => MovesUpdateWithoutContestCombosSecondInput, {
    nullable: false
  })
  update!: MovesUpdateWithoutContestCombosSecondInput;

  @TypeGraphQL.Field(_type => MovesCreateWithoutContestCombosSecondInput, {
    nullable: false
  })
  create!: MovesCreateWithoutContestCombosSecondInput;

  @TypeGraphQL.Field(_type => MovesWhereInput, {
    nullable: true
  })
  where?: MovesWhereInput | undefined;
}
