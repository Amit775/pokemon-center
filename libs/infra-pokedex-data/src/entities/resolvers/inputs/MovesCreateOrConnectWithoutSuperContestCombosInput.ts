import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovesCreateWithoutSuperContestCombosInput } from "../inputs/MovesCreateWithoutSuperContestCombosInput";
import { MovesWhereUniqueInput } from "../inputs/MovesWhereUniqueInput";

@TypeGraphQL.InputType("MovesCreateOrConnectWithoutSuperContestCombosInput", {})
export class MovesCreateOrConnectWithoutSuperContestCombosInput {
  @TypeGraphQL.Field(_type => MovesWhereUniqueInput, {
    nullable: false
  })
  where!: MovesWhereUniqueInput;

  @TypeGraphQL.Field(_type => MovesCreateWithoutSuperContestCombosInput, {
    nullable: false
  })
  create!: MovesCreateWithoutSuperContestCombosInput;
}
