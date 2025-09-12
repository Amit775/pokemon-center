import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovesCreateWithoutContestCombosSecondInput } from "../inputs/MovesCreateWithoutContestCombosSecondInput";
import { MovesWhereUniqueInput } from "../inputs/MovesWhereUniqueInput";

@TypeGraphQL.InputType("MovesCreateOrConnectWithoutContestCombosSecondInput", {})
export class MovesCreateOrConnectWithoutContestCombosSecondInput {
  @TypeGraphQL.Field(_type => MovesWhereUniqueInput, {
    nullable: false
  })
  where!: MovesWhereUniqueInput;

  @TypeGraphQL.Field(_type => MovesCreateWithoutContestCombosSecondInput, {
    nullable: false
  })
  create!: MovesCreateWithoutContestCombosSecondInput;
}
