import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovesCreateWithoutSuperContestCombosSecondInput } from "../inputs/MovesCreateWithoutSuperContestCombosSecondInput";
import { MovesUpdateWithoutSuperContestCombosSecondInput } from "../inputs/MovesUpdateWithoutSuperContestCombosSecondInput";
import { MovesWhereInput } from "../inputs/MovesWhereInput";

@TypeGraphQL.InputType("MovesUpsertWithoutSuperContestCombosSecondInput", {})
export class MovesUpsertWithoutSuperContestCombosSecondInput {
  @TypeGraphQL.Field(_type => MovesUpdateWithoutSuperContestCombosSecondInput, {
    nullable: false
  })
  update!: MovesUpdateWithoutSuperContestCombosSecondInput;

  @TypeGraphQL.Field(_type => MovesCreateWithoutSuperContestCombosSecondInput, {
    nullable: false
  })
  create!: MovesCreateWithoutSuperContestCombosSecondInput;

  @TypeGraphQL.Field(_type => MovesWhereInput, {
    nullable: true
  })
  where?: MovesWhereInput | undefined;
}
