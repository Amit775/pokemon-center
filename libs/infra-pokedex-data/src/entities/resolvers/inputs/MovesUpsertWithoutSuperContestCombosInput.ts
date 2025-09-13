import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovesCreateWithoutSuperContestCombosInput } from "../inputs/MovesCreateWithoutSuperContestCombosInput";
import { MovesUpdateWithoutSuperContestCombosInput } from "../inputs/MovesUpdateWithoutSuperContestCombosInput";
import { MovesWhereInput } from "../inputs/MovesWhereInput";

@TypeGraphQL.InputType("MovesUpsertWithoutSuperContestCombosInput", {})
export class MovesUpsertWithoutSuperContestCombosInput {
  @TypeGraphQL.Field(_type => MovesUpdateWithoutSuperContestCombosInput, {
    nullable: false
  })
  update!: MovesUpdateWithoutSuperContestCombosInput;

  @TypeGraphQL.Field(_type => MovesCreateWithoutSuperContestCombosInput, {
    nullable: false
  })
  create!: MovesCreateWithoutSuperContestCombosInput;

  @TypeGraphQL.Field(_type => MovesWhereInput, {
    nullable: true
  })
  where?: MovesWhereInput | undefined;
}
