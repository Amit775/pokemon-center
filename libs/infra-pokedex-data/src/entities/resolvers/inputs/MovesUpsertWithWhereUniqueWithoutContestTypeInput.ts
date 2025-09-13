import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovesCreateWithoutContestTypeInput } from "../inputs/MovesCreateWithoutContestTypeInput";
import { MovesUpdateWithoutContestTypeInput } from "../inputs/MovesUpdateWithoutContestTypeInput";
import { MovesWhereUniqueInput } from "../inputs/MovesWhereUniqueInput";

@TypeGraphQL.InputType("MovesUpsertWithWhereUniqueWithoutContestTypeInput", {})
export class MovesUpsertWithWhereUniqueWithoutContestTypeInput {
  @TypeGraphQL.Field(_type => MovesWhereUniqueInput, {
    nullable: false
  })
  where!: MovesWhereUniqueInput;

  @TypeGraphQL.Field(_type => MovesUpdateWithoutContestTypeInput, {
    nullable: false
  })
  update!: MovesUpdateWithoutContestTypeInput;

  @TypeGraphQL.Field(_type => MovesCreateWithoutContestTypeInput, {
    nullable: false
  })
  create!: MovesCreateWithoutContestTypeInput;
}
