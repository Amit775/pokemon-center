import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovesCreateWithoutSuperContestCombosSecondInput } from "../inputs/MovesCreateWithoutSuperContestCombosSecondInput";
import { MovesWhereUniqueInput } from "../inputs/MovesWhereUniqueInput";

@TypeGraphQL.InputType("MovesCreateOrConnectWithoutSuperContestCombosSecondInput", {})
export class MovesCreateOrConnectWithoutSuperContestCombosSecondInput {
  @TypeGraphQL.Field(_type => MovesWhereUniqueInput, {
    nullable: false
  })
  where!: MovesWhereUniqueInput;

  @TypeGraphQL.Field(_type => MovesCreateWithoutSuperContestCombosSecondInput, {
    nullable: false
  })
  create!: MovesCreateWithoutSuperContestCombosSecondInput;
}
