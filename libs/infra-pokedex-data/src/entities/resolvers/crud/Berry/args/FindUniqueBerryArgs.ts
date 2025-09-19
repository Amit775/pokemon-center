import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BerryWhereUniqueInput } from "../../../inputs/BerryWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueBerryArgs {
  @TypeGraphQL.Field(_type => BerryWhereUniqueInput, {
    nullable: false
  })
  where!: BerryWhereUniqueInput;
}
