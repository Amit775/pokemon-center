import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ItemGameIndicesCreateManyInput } from "../../../inputs/ItemGameIndicesCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyItemGameIndicesArgs {
  @TypeGraphQL.Field(_type => [ItemGameIndicesCreateManyInput], {
    nullable: false
  })
  data!: ItemGameIndicesCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
