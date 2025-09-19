import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BerryCreateInput } from "../../../inputs/BerryCreateInput";
import { BerryUpdateInput } from "../../../inputs/BerryUpdateInput";
import { BerryWhereUniqueInput } from "../../../inputs/BerryWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneBerryArgs {
  @TypeGraphQL.Field(_type => BerryWhereUniqueInput, {
    nullable: false
  })
  where!: BerryWhereUniqueInput;

  @TypeGraphQL.Field(_type => BerryCreateInput, {
    nullable: false
  })
  create!: BerryCreateInput;

  @TypeGraphQL.Field(_type => BerryUpdateInput, {
    nullable: false
  })
  update!: BerryUpdateInput;
}
